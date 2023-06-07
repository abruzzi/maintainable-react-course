import Avatar from "./Avatar";
import React from "react";
import { ContactType } from "./types";

function ContactDetails({
  name,
  role,
  team,
}: ContactType) {
  return (
    <div className="details">
      <h3>{name}</h3>
      <p>
        {role}{" "}
        <span className="team">{team}</span>
      </p>
    </div>
  );
}

export function Contact({
  name,
  role,
  team,
}: ContactType) {
  return (
    <div className="contact">
      <Avatar
        size="medium"
        shape="circle"
        src="https://i.pravatar.cc/128"
        title={name}
      />
      <ContactDetails
        name={name}
        role={role}
        team={team}
      />
    </div>
  );
}
