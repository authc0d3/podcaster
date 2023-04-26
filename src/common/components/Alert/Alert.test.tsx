import { cleanup, render, screen } from "@testing-library/react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import Alert from "./Alert";
import { AlertProps, AlertType } from "./types";

interface AlertCase {
  readonly id: number;
  readonly name: string;
  readonly type?: AlertType;
  readonly classRegex?: RegExp;
  readonly iconRegex?: RegExp;
  readonly showIcon?: boolean;
  readonly icon?: IconName;
}

const alertCases: Readonly<AlertCase[]> = [
  {
    id: 1,
    name: "should render default alert without icon",
    classRegex: /info/i,
  },
  {
    id: 2,
    name: "should render default alert with icon",
    iconRegex: /info/i,
    classRegex: /info/i,
    showIcon: true,
  },
  {
    id: 3,
    name: "should render info alert with icon",
    iconRegex: /info/i,
    classRegex: /info/i,
    showIcon: true,
    type: "info",
  },
  {
    id: 4,
    name: "should render success alert with icon",
    iconRegex: /check/i,
    classRegex: /success/i,
    showIcon: true,
    type: "success",
  },
  {
    id: 5,
    name: "should render warning alert with icon",
    iconRegex: /exclamation/i,
    classRegex: /warning/i,
    showIcon: true,
    type: "warning",
  },
  {
    id: 6,
    name: "should render danger alert with icon",
    iconRegex: /exclamation/i,
    classRegex: /error/i,
    showIcon: true,
    type: "error",
  },
  {
    id: 7,
    name: "should render alert with custom icon",
    iconRegex: /podcast/i,
    showIcon: true,
    icon: "podcast",
  },
];

async function renderComponent(props?: Partial<AlertProps>) {
  return await render(<Alert {...props} text="Lorem ipsum" />);
}

describe.each(alertCases)(
  `Alert (case $id of ${alertCases.length})`,
  ({ id, name, iconRegex, classRegex, showIcon, type, icon }) => {
    it(name, async () => {
      const { container } = await renderComponent({ showIcon, type, icon });
      expect(screen.getByText(/Lorem ipsum/i)).toBeVisible();

      if (iconRegex) {
        const icon = container
          .getElementsByTagName("svg")?.[0]
          .getAttribute("class");
        expect(icon).toMatch(iconRegex);
      } else {
        expect(container.getElementsByTagName("svg").length).toBe(0);
      }

      if (classRegex) {
        expect(screen.getByRole("alert").getAttribute("class")).toMatch(
          classRegex
        );
      }
    });
  }
);
