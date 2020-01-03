import http from 'k6/http';
import { check } from 'k6';

export let options = {
  rps: 1100,
  stages: [
    { duration: '30s', target: 20 },
    { duration: '40s', target: 60 },
    { duration: '2m', target: 100 },
    { duration: '30s', target: 40 },
  ]
};

export default function() {
  let res = http.get('http://localhost:3030/overview');
  check(res, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200
  });
};
