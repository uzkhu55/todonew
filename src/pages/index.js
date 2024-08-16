import { Body } from "@/component/Body";
import { Button } from "@/component/Button";
import { Input } from "@/component/Input";
import { Layout } from "@/component/Layout";
import { Modal } from "@/component/Modal";
import { Paragraph } from "@/component/Paragraph";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [newtask, setNewtask] = useState([]);

  const clickButton = () => {
    setNewtask([...newtask, task]);
  };
  const deleteButton = (index) => {
    const updateButton = newtask.filter((_, i) => i !== index);
    setNewtask(updateButton);
  };
  return (
    <Body>
      <Layout>
        <Paragraph color={"red"} fontSize={"24px"} fontWeight={"700"} />
        <Input placeholder={"Mail"} value={task} handler={setTask} />
        <Button width={"50px"} height={"20px"} click={clickButton} />
        {newtask.map((el, index) => {
          return (
            <div key={index}>
              {el}
              <Button
                width={"40px"}
                height={"20px"}
                text={"dlt"}
                click={() => deleteButton(index)}
              />
              <Button width={"40px"} height={"20px"} text={"edit"} />
            </div>
          );
        })}
        <Modal />
      </Layout>
    </Body>
  );
}
