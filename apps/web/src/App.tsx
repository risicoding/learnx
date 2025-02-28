import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-400">
      <Card className="w-3/4">
        <CardHeader>
          <CardTitle>hello</CardTitle>
        </CardHeader>
        <CardContent>content</CardContent>
        <CardFooter>
          <Button>footer</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default App;
