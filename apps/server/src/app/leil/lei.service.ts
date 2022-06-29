import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';

@Injectable()
export class LeiService {
  private logger = new Logger(LeiService.name);
  endpoint = 'https://www.lei-lookup.com/leilookup.php';

  constructor(private readonly httpService: HttpService, private configService: ConfigService) {
    if (configService.get('LOCAL') === 'true') {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    }
  }

  async lookup(lei: string) {
    const headers = {
      referer: 'https://www.lei-lookup.com/',
    };
    return this.httpService
      .get(`${this.endpoint}?lei=${lei}`, { headers })
      .pipe(map((res) => res.data));
  }
}
