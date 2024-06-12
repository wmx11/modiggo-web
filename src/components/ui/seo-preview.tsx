/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { Card, CardContent } from "./card";
import { SearchIcon } from "lucide-react";
import { Input } from "./input";

const SEOPreview = () => {
  const [value, setValue] = useState("Your app");

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="relative flex items-center">
          <SearchIcon className="absolute w-3 ml-2" />
          <Input
            value={value}
            className="pl-6 text-muted-foreground"
            onChange={(e) => setValue(e.currentTarget.value)}
            maxLength={30}
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-[10px] text-muted-foreground">
              www.hackernews.com
            </p>
            <p className="text-sm">
              We launched <strong>{value}.</strong>
            </p>
            <p className="text-xs text-muted-foreground">
              The comments should look something like this but let's focus on
              {value}.
            </p>
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground">
              www.fancy-website.com
            </p>
            <p className="text-sm">
              <strong>{value}</strong> is making a change!
            </p>
            <p className="text-xs text-muted-foreground">
              With Modiggo you can create an app that is loved by search
              engines. We don't JUST code. We also help you rank.
            </p>
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground">
              www.othernews.com
            </p>
            <p className="text-sm">
              10 ways <strong>{value}</strong> helped them do stuff...
            </p>
            <p className="text-xs text-muted-foreground">
              One of the best ways to get traffic is through organic reach.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOPreview;
