import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("https://gh-pinned-repos.egoist.dev/?username=pushparajanrahul")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(data => {
            const reshaped = data.map((repo, idx) => ({
              node: {
                id: idx,
                name: repo.repo?.trim(),
                url: repo.link?.trim(),
                description: repo.description?.trim(),
                primaryLanguage: repo.language
                  ? { name: repo.language?.trim(), color: repo.languageColor }
                  : null,
                forkCount: repo.forks ?? 0,
                stargazers: { totalCount: repo.stars ?? 0 },
                diskUsage: 0 // optional: placeholder
              }
            }));
            console.log("Reshaped Repo Data:", reshaped);
            setProfileFunction(reshaped);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
