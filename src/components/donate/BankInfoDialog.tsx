import { Dialog, Table, Button, Link, Box, Text } from "@radix-ui/themes";
import siteSettings from "../../data/site-settings.json";

const BankInfoDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger>
      <Box px="3" width={"100%"} asChild>
        <Button className="cursor-pointer" size={{ initial: "2", sm: "3" }}>
          Make a Bank Transfer
        </Button>
      </Box>
    </Dialog.Trigger>
    <Dialog.Content width="500px">
      <Dialog.Title>Bank information</Dialog.Title>
      <Dialog.Description>
        Make a donation directly to our bank account at Distribute Aid. Reach
        out to{" "}
        <Link
          href={`mailto:${siteSettings.donate.byBankTransfer.emailSupport}`}
        >
          {siteSettings.donate.byBankTransfer.emailSupport}
        </Link>{" "}
        if you have any questions.
      </Dialog.Description>
      <Table.Root size="3">
        <Table.Body>
          <Table.Row align="center">
            <Text asChild>
              <Table.Cell py="1" px="0" className="text-gray-700 font-medium">
                Account holder:
              </Table.Cell>
            </Text>
            <Text asChild>
              <Table.Cell py="1" pl="2" className="font-semibold text-navy-700">
                Distribute Aid
              </Table.Cell>
            </Text>
          </Table.Row>
          <Table.Row align="center">
            <Text asChild>
              <Table.Cell py="1" px="0" className="text-gray-700 font-medium">
                IBAN:
              </Table.Cell>
            </Text>
            <Text asChild>
              <Table.Cell py="1" pl="2" className="font-semibold text-navy-700">
                {siteSettings.donate.byBankTransfer.IBAN}
              </Table.Cell>
            </Text>
          </Table.Row>
          <Table.Row align="center">
            <Text asChild>
              <Table.Cell py="1" px="0" className="text-gray-700 font-medium">
                BIC:
              </Table.Cell>
            </Text>
            <Text asChild>
              <Table.Cell py="1" pl="2" className="font-semibold text-navy-700">
                {siteSettings.donate.byBankTransfer.BIC}
              </Table.Cell>
            </Text>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <Dialog.Close>
        <Box mt="3" display="block" className="ml-auto" asChild>
          <Button className="cursor-pointer">Close</Button>
        </Box>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Root>
);

export default BankInfoDialog;
