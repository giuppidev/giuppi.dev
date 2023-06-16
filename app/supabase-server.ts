import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from "react";

export const createServerSupabaseClient = cache(() =>
  createServerComponentClient<Database>({ cookies })
);

export async function getSession() {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getAllUsers() {
  const supabase = createServerSupabaseClient();
  try {
    const { data: users } = await supabase.from("profiles").select();
    return users;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function isAdmin() {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { data: user } = await supabase
      .from("profiles")
      .select()
      .eq("id", session?.user.id)
      .single();
    return user?.is_admin;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function getUserDetails() {
  const supabase = createServerSupabaseClient();
  try {
    const { data: userDetails } = await supabase.from("profiles").select();
    return userDetails;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getAllCourses() {
  const supabase = createServerSupabaseClient();
  try {
    const { data: courses } = await supabase.from("products").select();
    return courses;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
