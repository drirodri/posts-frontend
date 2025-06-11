import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/Input";

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Dri Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Search posts..." />
          <div className="flex gap-2">
            <Button className="flex-1">Login</Button>
            <Button variant="outline" className="flex-1">
              Register
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
