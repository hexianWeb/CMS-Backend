import router from '@/router';
import { createPermissionGuard } from './permission-guard';

export const setupRouterGuard = () => {
  createPermissionGuard(router);
};
