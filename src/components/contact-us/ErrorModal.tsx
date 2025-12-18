import { AlertDialog, Button, Flex } from "@radix-ui/themes";

export default function ErrorModal({
  open,
  toggleOpen,
}: {
  open: boolean;
  toggleOpen: () => void;
}) {
  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Oh no!</AlertDialog.Title>
        <AlertDialog.Description size="2">
          There was a problem on our end. Please try again later.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={toggleOpen}>
              Ok
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
