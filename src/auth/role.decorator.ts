import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/users/entities/user.entity';

export type AllowedRols = keyof typeof UserRole | 'Any';

export const Role = (roles: AllowedRols[]) => SetMetadata('roles', roles);
