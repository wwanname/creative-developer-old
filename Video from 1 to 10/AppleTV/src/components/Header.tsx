import { Button } from "../children/button";
import { Container } from "../children/container";

export const Header = () => {
  const myDevice = [
    "Store",
    "Mac",
    "Ipad",
    "Iphone",
    "Watch",
    "Vision",
    "AirPods",
    "TV",
    "Phone",
    "Entertainment",
  ];

  return (
    <>
      <header className="bg-backgroundContrast relative z-20 text-white">
        <Container className="flex min-h-[--header-row-height] items-center">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6 text-xl"
          >
             <span className="sr-only">Back to homepage</span>
          </a>
          {myDevice.map((item, index) => (
            <p key={index} className="m-auto">
              {item}
            </p>
          ))}
        </Container>
      </header>
      <div className="bg-backgroundContrast sticky top-0 z-20 text-white">
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};
