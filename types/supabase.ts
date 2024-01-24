export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      coupons: {
        Row: {
          code: string
          created_at: string | null
          discount: number | null
          id: number
        }
        Insert: {
          code: string
          created_at?: string | null
          discount?: number | null
          id?: number
        }
        Update: {
          code?: string
          created_at?: string | null
          discount?: number | null
          id?: number
        }
        Relationships: []
      }
      lessons: {
        Row: {
          created_at: string | null
          description: string | null
          event_timestamp: string | null
          id: number
          name: string | null
          product_id: number
          video_stream_id: string | null
          video_yt_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          event_timestamp?: string | null
          id?: number
          name?: string | null
          product_id: number
          video_stream_id?: string | null
          video_yt_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          event_timestamp?: string | null
          id?: number
          name?: string | null
          product_id?: number
          video_stream_id?: string | null
          video_yt_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      orders: {
        Row: {
          created_at: string | null
          id: number
          payment_status: string | null
          product_id: number | null
          stripe_payment_intent_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          payment_status?: string | null
          product_id?: number | null
          stripe_payment_intent_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          payment_status?: string | null
          product_id?: number | null
          stripe_payment_intent_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          cover_url: string | null
          created_at: string | null
          description: string | null
          github_repo: string | null
          id: number
          lessons_count: number | null
          level: string | null
          logo: string | null
          name: string | null
          order: number | null
          price: number | null
          product_type: Database["public"]["Enums"]["course_type_enum"] | null
          published: boolean
          short_description: string | null
          show: boolean
          slug: string | null
          start_date: string | null
          tags: string[] | null
          video_url: string | null
          visible: boolean | null
          zoom_url: string | null
        }
        Insert: {
          cover_url?: string | null
          created_at?: string | null
          description?: string | null
          github_repo?: string | null
          id?: number
          lessons_count?: number | null
          level?: string | null
          logo?: string | null
          name?: string | null
          order?: number | null
          price?: number | null
          product_type?: Database["public"]["Enums"]["course_type_enum"] | null
          published?: boolean
          short_description?: string | null
          show?: boolean
          slug?: string | null
          start_date?: string | null
          tags?: string[] | null
          video_url?: string | null
          visible?: boolean | null
          zoom_url?: string | null
        }
        Update: {
          cover_url?: string | null
          created_at?: string | null
          description?: string | null
          github_repo?: string | null
          id?: number
          lessons_count?: number | null
          level?: string | null
          logo?: string | null
          name?: string | null
          order?: number | null
          price?: number | null
          product_type?: Database["public"]["Enums"]["course_type_enum"] | null
          published?: boolean
          short_description?: string | null
          show?: boolean
          slug?: string | null
          start_date?: string | null
          tags?: string[] | null
          video_url?: string | null
          visible?: boolean | null
          zoom_url?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          email: string | null
          first_name: string | null
          full_name: string | null
          id: string
          is_admin: boolean
          last_name: string | null
          newsletter_accepted: string | null
          stripe_customer_id: string | null
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          email?: string | null
          first_name?: string | null
          full_name?: string | null
          id: string
          is_admin?: boolean
          last_name?: string | null
          newsletter_accepted?: string | null
          stripe_customer_id?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string | null
          first_name?: string | null
          full_name?: string | null
          id?: string
          is_admin?: boolean
          last_name?: string | null
          newsletter_accepted?: string | null
          stripe_customer_id?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      reactday: {
        Row: {
          created_at: string
          email: string | null
          id: number
          idea: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          idea?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          idea?: string | null
        }
        Relationships: []
      }
      sections: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          name: string | null
          product_id: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          product_id?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          product_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sections_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      subscriptions: {
        Row: {
          active: boolean | null
          created_at: string | null
          email: string
          id: number
          stripe_id: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          email: string
          id?: number
          stripe_id: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          email?: string
          id?: number
          stripe_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      course_type_enum: "course" | "masterclass" | "mentorship"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
