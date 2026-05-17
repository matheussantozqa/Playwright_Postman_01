import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '40s', target: 10  }, // sobe para 10 VUs
    { duration: '40s', target: 50  }, // sobe para 50 VUs
    { duration: '40s', target: 100 }, // sobe para 100 VUs
  ],
};

export default function () {
  const res = http.get('https://restful-booker.herokuapp.com/booking');

  check(res, {
    'status é 200': (r) => r.status === 200,
    'sem erro 500': (r) => r.status !== 500,
  });

  sleep(1);
}