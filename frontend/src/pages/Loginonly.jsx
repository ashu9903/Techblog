import React, { useContext } from "react";
import { BlogContext } from "../App";

export default function Loginonly({ element }) {
  const { login } = useContext(BlogContext);
  return login ? element : "Unautherized Access";
}
