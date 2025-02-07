import { API_ROUTES } from '@constants';
import { IFetchCatFact } from '@types';

export const getCatFacts = async (limit: number) => {
  const resp = await fetch(API_ROUTES.catFacts(limit));

  if (!resp.ok) return { data: null, error: resp.status };
  const data = (await resp.json()) as IFetchCatFact;

  return { data, error: null };
};
