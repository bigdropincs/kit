import type { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { exchangeCodeForSession } from "@bigdropincs/api/auth/auth-callback-service";
import { getSupabaseServerClient } from "@bigdropincs/db/supabase-server-client";

export const GET = async (request: NextRequest) => {
  const client = getSupabaseServerClient();
  const { nextPath } = await exchangeCodeForSession(client, request, {
    joinTeamPath: "/join",
    redirectPath: "/dashboard",
  });

  return redirect(nextPath);
};
