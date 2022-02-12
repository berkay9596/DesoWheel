import { FaGg } from "react-icons/fa";
import { AiFillFilter } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { FcMultipleDevices } from "react-icons/fc";

export const FeatureList = [
  {
    id: 1,
    icon: <FcMultipleDevices color="#0a1930" size={22} />,
    heading: "Designed for you",
    text: "First of all, no matter what device you are using, we believe our website is fully responsive. So you can use our website wherever you are. ",
  },
  {
    id: 2,
    icon: <FaGg color="#0a1930" size={22} />,
    heading: "two different type of usage",
    text: "We let our users to choose to login or not. If the user is not logged in, he/she has to provide us the url so that we can filter the people to add the wheel. If the user is logged in, he/she can filter the posts as they want.",
  },
  {
    id: 3,
    icon: <AiFillFilter color="#0a1930" size={22} />,
    heading: "Filter the posts",
    text: "In the 'My posts' page, users can decide the filters. If they want to add the people who liked and reposted to the wheel, they should mark only these two. If they want to add the people who liked, reposted and diamoned the post, they should mark all of the options.",
  },
  {
    id: 4,
    icon: <FiShare color="#0a1930" size={22} />,
    heading: "Share in DESO",
    text: "Logged in users when they see the winner modal, there should appear a 'Share in DESO' button. This button automatically congratulate the winner with a post on DESO." ,
  },
];
