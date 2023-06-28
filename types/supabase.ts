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
          eventbrite_url: string | null
          id: number
          lessons_count: number | null
          level: string | null
          name: string | null
          order: number | null
          price: number | null
          product_type: Database["public"]["Enums"]["course_type_enum"] | null
          short_description: string | null
          slug: string | null
          start_date: string | null
          tags: string[] | null
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          discount?: number | null
          eventbrite_url?: string | null
          id?: number
          lessons_count?: number | null
          level?: string | null
          name?: string | null
          order?: number | null
          price?: number | null
          product_type?: Database["public"]["Enums"]["course_type_enum"] | null
          short_description?: string | null
          slug?: string | null
          start_date?: string | null
          tags?: string[] | null
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          discount?: number | null
          eventbrite_url?: string | null
          id?: number
          lessons_count?: number | null
          level?: string | null
          name?: string | null
          order?: number | null
          price?: number | null
          product_type?: Database["public"]["Enums"]["course_type_enum"] | null
          short_description?: string | null
          slug?: string | null
          start_date?: string | null
          tags?: string[] | null
          video_url?: string | null
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
      subscriptions: {
        Row: {
          created_at: string | null
          email: string
          id: number
          stripe_id: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          stripe_id: string
        }
        Update: {
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
