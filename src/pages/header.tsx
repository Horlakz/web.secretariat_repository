import Button from "@/components/ui/button";
import { ACCESS_TOKEN_KEY } from "@/constants/auth";
import { useRouter } from "@/router/router.hook";
import { Storage } from "@/utilities/storage";

function Header() {
  const storage = new Storage();
  const router = useRouter();

  return (
    <header className="py-4 px-8 w-full flex justify-end items-center border-b border-primary">
      <div className="flex items-center gap-2">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe&background=random&rounded=true"
          alt="user"
          className="rounded-full w-12 h-12"
        />
        <Button
          variant="ghost"
          colorScheme="danger"
          className="text-lg"
          onClick={() => {
            storage.deleteItem(ACCESS_TOKEN_KEY);
            router.goTo("/login");
          }}
        >
          Sign Out
        </Button>
      </div>
    </header>
  );
}

export default Header;
