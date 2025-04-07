import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifyTokenHash } from "@bigdropincs/api/auth/auth-callback-service";
import { getSupabaseServerClient } from "@bigdropincs/db/supabase-server-client";

export const GET = async (request: NextRequest) => {
  const client = getSupabaseServerClient();
  const url = await verifyTokenHash(client, request, {
    joinTeamPath: "/join",
    redirectPath: "/dashboard",
  });

  return NextResponse.redirect(url);
};
