import {db} from '~/services/db.server';
export type{ Player } from '@prisma/client';

export const getPlayers = () => db.player.findMany();