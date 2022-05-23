export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'deposit' : IDL.Func([IDL.Int], [IDL.Int], []),
    'withdraw' : IDL.Func([IDL.Int], [IDL.Int], []),
  });
};
export const init = ({ IDL }) => { return []; };
