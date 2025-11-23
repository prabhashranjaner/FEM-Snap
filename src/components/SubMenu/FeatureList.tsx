import styled from "styled-components";
import media from "../../styles/media";
import SubMenuItem from "./SubMenuItem";

const ListEl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
  padding: 1.6rem;

  ${media.tablet} {
    align-items: stretch;
    padding: 1rem 0;
    gap: 0;
    border-radius: 8px;
  }
`;

const FeatireList = () => {
  return (
    <ListEl>
      <SubMenuItem label="Todo List">
        <img alt="todo" src="/public/images/icon-todo.svg" />
      </SubMenuItem>

      <SubMenuItem label="Calender">
        <img alt="calender" src="/public/images/icon-calendar.svg" />
      </SubMenuItem>

      <SubMenuItem label="Reminders">
        <img alt="reminders" src="/public/images/icon-reminders.svg" />
      </SubMenuItem>

      <SubMenuItem label="Planning">
        <img alt="planning" src="/public/images/icon-planning.svg" />
      </SubMenuItem>
    </ListEl>
  );
};

export default FeatireList;
