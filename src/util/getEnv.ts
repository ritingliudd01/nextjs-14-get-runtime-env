import { unstable_noStore as noStore } from 'next/cache'

export default function getEnv() {
  noStore();
  return process.env;
}