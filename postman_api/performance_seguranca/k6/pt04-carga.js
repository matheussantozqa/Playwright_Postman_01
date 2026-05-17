import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,         // 10 usuários virtuais
  duration: '30s', // por 30 segundos
  thresholds: {
    http_req_duration: ['p(95)<3000'], // p95 menor que 3000ms
    http_req_failed: ['rate<0.05'],    // error rate menor que 5%
  },
};

export default function () {
  const res = http.get('https://restful-booker.herokuapp.com/booking');

  check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo abaixo de 3000ms': (r) => r.timings.duration < 3000,
  });

  sleep(1);
}