import React from "react";
import { Container, Box } from "./styles";
import { H1, P3 } from "app/components/font";

const WomenSizeGuide = () => {
  return (
    <Container>
      <Box>
        <H1 className="title">Women Size Guide</H1>
        <P3 className="desc">
          All returns are FREE provided that you use the returns label included
          in the parcel.
        </P3>
        <P3 className="desc">
          If you are not fully happy with the goods you have received, you can
          either withdraw from the contract (see right of withdrawal section) or
          return them to us for refund within 14 days of receipt as follows:
        </P3>

        <ul>
          <li>
            <P3 className="desc">
              Complete your returns form (included within your order) by ticking
              the item (s) you wish to return and giving a reason for the
              return. If you do not do so, it may take the Customer Care Team
              longer to identify your order and process your refund. Pack it
              with your return items (unused, intact, and in good condition,
              including any labels) in the original package (if possible). Stick
              your prepaid UPS label (included within your order) on your return
              parcel and seal it securely. Please make sure that it is clearly
              visible on the parcel and that the return address and barcodes are
              not covered or amended.
            </P3>
          </li>
          <li>
            <P3 className="desc">
              Once we have received and checked your return, we will process
              your refund and a notification email will be sent to you to
              confirm the validation (you’ll hear from us approx. 5 days from
              the date you send your parcel). Depending on your bank's
              processing time, it may take a few days for the credit to be
              reflected on your account. In the event you lose the return form
              or the UPS label, you can contact the Customer Contact Center.
            </P3>
          </li>
        </ul>
      </Box>
    </Container>
  );
};

export default WomenSizeGuide;
