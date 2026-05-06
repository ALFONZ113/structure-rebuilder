import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import { LoginForm } from '@/components/auth/LoginForm';

export default function AdminLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already logged in
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Check if user has admin role
        const { data: hasAdminRole } = await supabase
          .rpc('has_role', { _user_id: session.user.id, _role: 'admin' });
        
        if (hasAdminRole) {
          navigate('/social-generator');
        }
      }
    };

    checkSession();
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Admin přihlášení | Nejvýhodnější Připojení</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 px-4">
        <LoginForm />
      </div>
    </>
  );
}
