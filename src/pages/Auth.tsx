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

  // Separate states for Sign In & Sign Up to avoid data overlap
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({ email: "", password: "" });

  const handleSignIn = async () => {
    if (!signInData.email || !signInData.password) {
      toast({ title: "Error", description: "Please fill all fields" });
      return;
    }
    const res = await signIn(signInData.email, signInData.password);
    if (res?.error) {
      toast({ title: "Auth", description: res.error.message });
    } else {
      toast({ title: "Welcome back!", description: "Signed in successfully." });
    }
  };

  const handleSignUp = async () => {
    if (!signUpData.email || !signUpData.password) {
      toast({ title: "Error", description: "Please fill all fields" });
      return;
    }
    const res = await signUp(signUpData.email, signUpData.password);
    if (res?.error) {
      toast({ title: "Auth", description: res.error.message });
    } else {
      toast({
        title: "Check your inbox",
        description: "Confirm your email to complete sign up.",
      });
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 border border-gray-200">
        <SEO
          title="Sign In / Join | Sportify"
          description="Secure authentication for your Sportify account."
          path="/auth"
        />
        <h1 className="mb-6 text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Sign In or Create an Account
        </h1>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger
              value="signin"
              className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md"
            >
              Join
            </TabsTrigger>
          </TabsList>

          {/* Sign In */}
          <TabsContent value="signin" className="mt-6 space-y-4">
            <div>
              <Label htmlFor="signin-email">Email</Label>
              <Input
                id="signin-email"
                type="email"
                placeholder="you@example.com"
                value={signInData.email}
                onChange={(e) =>
                  setSignInData({ ...signInData, email: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="signin-password">Password</Label>
              <Input
                id="signin-password"
                type="password"
                placeholder="••••••••"
                value={signInData.password}
                onChange={(e) =>
                  setSignInData({ ...signInData, password: e.target.value })
                }
              />
            </div>
            <Button
              variant="cta"
              onClick={handleSignIn}
              className="w-full py-2"
            >
              Sign In
            </Button>
          </TabsContent>

          {/* Sign Up */}
          <TabsContent value="signup" className="mt-6 space-y-4">
            <div>
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                value={signUpData.email}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="signup-password">Password</Label>
              <Input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
              />
            </div>
            <Button
              variant="hero"
              onClick={handleSignUp}
              className="w-full py-2"
            >
              Create Account
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Auth;
