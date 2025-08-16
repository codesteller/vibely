// test/environment.spec.ts
import { execSync } from 'child_process';

describe('Environment Setup', () => {
  it('should connect to MongoDB', () => {
    expect(() => {
      execSync('mongo --eval "db.stats()" --quiet', { stdio: 'ignore' });
    }).not.toThrow();
  });

  it('should connect to PostgreSQL', () => {
    expect(() => {
      execSync('psql -U vibely -d vibely -c "\l" > /dev/null', { stdio: 'ignore', env: { ...process.env, PGPASSWORD: 'vibelypass' } });
    }).not.toThrow();
  });

  it('should connect to Redis', () => {
    expect(() => {
      execSync('redis-cli ping', { stdio: 'ignore' });
    }).not.toThrow();
  });
});
