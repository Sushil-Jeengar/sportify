import { createContext, useContext, useEffect, useState, ReactNode } from "react";

/*
  AuthProvider
  - If Supabase is configured in this project, replace the internals to use it.
  - For now, we provide a safe fallback that keeps the app functional and
    surfaces clear messages. This avoids build errors if Supabase isn't present yet.
*/

interface AuthContextValue {
  user: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: any } | void>;
  signUp: (email: string, password: string) => Promise<{ error?: any } | void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  // Placeholder: no persisted auth yet
  useEffect(() => {
    setLoading(false);
  }, []);

  const notConfigured = (action: string) => ({
    error: { message: `Authentication is not configured yet. Cannot ${action}.` },
  });

  const signIn = async (_email: string, _password: string) => notConfigured("sign in");
  const signUp = async (_email: string, _password: string) => notConfigured("sign up");
  const signOut = async () => { setUser(null); };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
