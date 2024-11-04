import { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import { AppDispatch } from "./store/store";
import { useDispatch } from "react-redux";
import { getSiteInfo as getSiteInfoApi } from "./services/api";
import { getSiteInfo } from "./store/slice/siteInfoSlice";
import { objFormat } from "./util/helpers";
import Homepage from "./page/homepage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import RootLayout from "./layout/RootLayout";
import TopStories from "./page/topStories";
import TopStoryItems from "./page/topStories/topStoryItems";
import Officials from "./page/officials";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="topStories" element={<TopStories />} />
          <Route path="topStoryItem/:id" element={<TopStoryItems />} />
          <Route path="officials" element={<Officials />} />
        </Route>
      </React.Fragment>
    )
  );
  useEffect(() => {
    // Fetch the site information
    getSiteInfoApi().then((res) => {
      dispatch(getSiteInfo(res.data));

      // Format the received data
      const info = objFormat(res.data);

      // Update the document title dynamically
      document.title = info.title;

      // Update the favicon dynamically
      const faviconLink: HTMLLinkElement | null =
        document.querySelector("link[rel*='icon']");

      // Create a new favicon link element if it doesn't exist
      if (!faviconLink) {
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = info.logo; // URL to the new logo (could be from res.data)
        document.head.appendChild(link);
      } else {
        // Update the existing favicon link
        faviconLink.href = info.logo; // URL to the new logo (could be from res.data)
      }
    });
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
