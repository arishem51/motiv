// import { ComponentMeta, ComponentStory } from "@storybook/react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { doc, getDoc } from "firebase/firestore";
// import { rest } from "msw";
// import { firebaseDB } from "..";
// import TopBarAvatar from "./TopBarAvatar";

// export default {
//   component: TopBarAvatar,
//   title: "TopBarAvatar",
// } as ComponentMeta<typeof TopBarAvatar>;

// const queryClient = new QueryClient();

// export const Default: ComponentStory<typeof TopBarAvatar> = () => (
//   <QueryClientProvider client={queryClient}>
//     <TopBarAvatar />
//   </QueryClientProvider>
// );

// Default.parameters = {
//   msw: {
//     handlers: [
//       [
//         rest.get("/user", async (req, res, ctx) => {
//           //cast type email
//           const email = "hungphung2002@gmail.com";
//           const docRef = await doc(firebaseDB, "users", email);
//           const result = await (await getDoc(docRef)).data();
//           return res(
//             ctx.json({
//               result,
//             })
//           );
//         }),
//       ],
//     ],
//   },
// };
