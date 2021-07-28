import { gql, useQuery } from '@apollo/client';

const query = gql`
  query {
    rules {
      nodes {
        id
        cid
        createTime
        motionHash
      }
    }
  }
`;

interface Rule {
  id: string;
  cid: string;
  createTime: string;
  motionHash: string;
}

interface QueryList<T> {
  rules: {
    nodes: T[];
  };
}

export function useRule() {
  const { data, loading, error } = useQuery<QueryList<Rule>>(query);

  console.log('data', data);
  return { data: data?.rules.nodes[0], loading, error };
}
