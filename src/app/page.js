import { redirect } from "next/navigation";

export default function Page() {
  redirect("/daily-reminders");
  return null;

  // return (
  //   <div className="p-4 pt-6 pb-20">
  //     <h1 className="text-2xl font-bold">Welcome to Pet Reminders!</h1>
  //     <p>Choose a section from the menu below.</p>
  //   </div>
  // );
}
