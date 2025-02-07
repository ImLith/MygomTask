export const API_ROUTES = {
  catFacts: (limit?: number) =>
    `https://catfact.ninja/facts?${typeof limit == 'number' ? `limit=${limit}` : ''}`,
};
