"use client";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // const { isAuthenticated } = useSelector((state:RootState) => state.auth);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.replace("/");
  //   }
  // }, [isAuthenticated, router]);

  // if (!isAuthenticated) return null; 

  return <>{children}</>;
}
