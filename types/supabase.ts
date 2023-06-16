export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      lessons: {
        Row: {
          created_at: string | null
          description: string | null
          event_timestamp: string | null
          id: number
          live_url: string | null
          name: string | null
          product_id: number
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          event_timestamp?: string | null
          id?: number
          live_url?: string | null
          name?: string | null
          product_id: number
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          event_timestamp?: string | null
          id?: number
          live_url?: string | null
          name?: string | null
          product_id?: number
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_product_id_fkey"
            columns: ["product_id"]
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
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          created_at: string | null
          description: string | null
          discount: number | null
          id: number
          level: string | null
          name: string | null
          price: number | null
          product_type: Database["public"]["Enums"]["course_type_enum"] | null
          slug: string | null
          stripe_product_id: string | null
          tags: string[] | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          discount?: number | null
          id?: number
          level?: string | null
          name?: string | null
          price?: number | null
          product_type?: Database["public"]["Enums"]["course_type_enum"] | null
          slug?: string | null
          stripe_product_id?: string | null
          tags?: string[] | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          discount?: number | null
          id?: number
          level?: string | null
          name?: string | null
          price?: number | null
          product_type?: Database["public"]["Enums"]["course_type_enum"] | null
          slug?: string | null
          stripe_product_id?: string | null
          tags?: string[] | null
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
          stripe_customer_id?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
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
