import { SEO } from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthProvider";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Auth = () => {
  const { signIn, signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async () => {
    const res = await signIn(email, password);
    if ((res as any)?.error) {
      toast({ title: "Auth", description: (res as any).error.message });
    } else {
      toast({ title: "Welcome back!", description: "Signed in successfully." });
    }
  };

  const onSignUp = async () => {
    const res = await signUp(email, password);
    if ((res as any)?.error) {
      toast({ title: "Auth", description: (res as any).error.message });
    } else {
      toast({ title: "Check your inbox", description: "Confirm your email to complete sign up." });
    }
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <SEO title="Sign In / Join | Sportify" description="Secure authentication for your Sportify account." path="/auth" />
      <h1 className="mb-6 text-3xl font-bold">Sign in or Create an Account</h1>

      <Tabs defaultValue="signin" className="max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Join</TabsTrigger>
        </TabsList>
        <TabsContent value="signin" className="mt-4 space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button variant="cta" onClick={onSignIn}>Sign In</Button>
        </TabsContent>
        <TabsContent value="signup" className="mt-4 space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button variant="hero" onClick={onSignUp}>Create Account</Button>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Auth;
