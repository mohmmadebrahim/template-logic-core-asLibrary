import Header from "./header";

export function BaseLayout({ children }: any) {

  return (
    <>
      <Header />
      {children}
    </>
  )
}
