
import { createClient } from '@supabase/supabase-js'


export async function dbConnection(){

    try {
        const supabaseUrl = 'https://rmjcautzbylrtemteisu.supabase.co'
        const connection = await createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtamNhdXR6YnlscnRlbXRlaXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MDA0NDYsImV4cCI6MjA1NTE3NjQ0Nn0.RYwyPtw5m4DLuayvg_RhM7f1zT9F_Hv5vpUAvkyLxbM")
        console.log("checking connection......")
        if(connection){
            console.log("connected to database")
        }
        
    } catch (error) {
        console.log("error connecting to database")
        
    }
    




}





