import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

function App() {
  const [sets, setSets] = useState(0);

  const exerciseInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = `Workout: ${sets} Sets`;
  }, [sets]);

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-6">

      <Card className="w-full max-w-md overflow-hidden border-0 shadow-2xl">

        {/* Header */}
        <CardHeader className="bg-[#18181b] px-6 py-7 text-white">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs uppercase tracking-[3px] text-orange-400">
                Fitness
              </p>

              <CardTitle className="mt-2 text-3xl font-bold">
                Workout Tracker
              </CardTitle>
            </div>

            <div className="text-4xl">
              🏋️
            </div>

          </div>

        </CardHeader>

        <CardContent className="space-y-5 bg-white p-6">

          {/* Exercise Input */}
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Exercise Name
            </label>

            <Input
              ref={exerciseInput}
              placeholder="e.g. Squats, Push Ups"
              className="mt-2 h-11"
            />
          </div>

          {/* Focus Button */}
          <Button
            onClick={() => exerciseInput.current?.focus()}
            variant="outline"
            className="w-full h-10"
          >
            Focus Exercise Input
          </Button>

          {/* Workout Counter */}
          <div className="relative overflow-hidden rounded-2xl bg-[#18181b] px-6 py-7 text-center">

            <div className="absolute right-4 top-3 text-5xl opacity-10">
              🏋️
            </div>

            <p className="text-sm font-medium text-slate-400">
              COMPLETED SETS
            </p>

            <h2 className="mt-2 text-6xl font-bold text-orange-500">
              {sets}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep pushing your limits
            </p>

          </div>

          {/* Goal Badge */}
          {sets >= 5 && (
            <div className="flex justify-center">
              <Badge className="bg-orange-100 px-4 py-1.5 text-orange-700 hover:bg-orange-100">
                🎯 Goal Completed
              </Badge>
            </div>
          )}

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3">

            <Button
              onClick={() => setSets(sets + 1)}
              className="h-11 bg-orange-500 text-white hover:bg-orange-600"
            >
              + Complete Set
            </Button>

            <Button
              disabled={sets === 0}
              onClick={() => {
                if (sets > 0) {
                  setSets(sets - 1);
                }
              }}
              variant="outline"
              className="h-11"
            >
              - Remove Set
            </Button>

          </div>

          {/* Reset */}
          <Button
            onClick={() => setSets(0)}
            variant="secondary"
            className="h-10 w-full"
          >
            Reset Workout
          </Button>

          {/* Message */}
          <div className="border-t pt-4 text-center">

            {sets === 0 && (
              <p className="text-sm font-medium text-slate-500">
                Start your workout! 🏃
              </p>
            )}

            {sets >= 1 && sets <= 4 && (
              <p className="text-sm font-medium text-orange-600">
                Keep going! 💪
              </p>
            )}

            {sets >= 5 && (
              <p className="text-sm font-semibold text-green-600">
                Great workout! 🔥
              </p>
            )}

          </div>

        </CardContent>
      </Card>
    </div>
  );
}

export default App;