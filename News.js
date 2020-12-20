
import React from "react";


import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import Search from './Search';

import {  Redirect } from 'react-router'



class News extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'redirect': false,
      staticContent: `<div class="humanColumnContents" style="width: 740px; padding-bottom: 877px;">

      <!-- Name -->
      <h1 class="humanColumnApiName" style="border-bottom: 1px solid black; width: 75%; padding-bottom: 10px;">
        Samsung  Pricing APIs  </h1>
      <!-- /Name -->
    
      <div class="humanColumnSection humanColumnContentsIntroduction"><div class="humanColumnSection humanColumnSectionIntroduction">
    
      <!-- Title -->
      <div class="humanColumnTitle">
        <h3 class="humanColumnTitleText">Introduction</h3>
      </div>
      <!-- /Title -->
    
      <!-- Description -->
          <div class="humanColumnApiDescription markdown formalTheme">
          <h2>Response Codes</h2>
    <p>We use conventional HTTP response codes to indicate success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that resulted from the provided information (e.g. a required parameter was missing, invalid syntax, etc.), and codes in the 5xx range indicate an error with Signifyd's servers.</p>
    <table>
    <thead>
    <tr>
    <th>Code</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><code>200</code></td>
    <td>Success. Request completed.</td>
    </tr>
    <tr>
    <td><code>201</code></td>
    <td>Success. New resource created.</td>
    </tr>
    <tr>
    <td><code>204</code></td>
    <td>Success. No content to return. Only the status code returns.</td>
    </tr>
    <tr>
    <td><code>400</code></td>
    <td>Bad Request - The request could not be parsed.</td>
    </tr>
    <tr>
    <td><code>401</code></td>
    <td>Unauthorized - user is not logged in, could not be authenticated.</td>
    </tr>
    <tr>
    <td><code>403</code></td>
    <td>Forbidden - Cannot access resource.</td>
    </tr>
    <tr>
    <td><code>404</code></td>
    <td>Not Found - resource doesn't exist.</td>
    </tr>
    <tr>
    <td><code>409</code></td>
    <td>Conflict - with state of the resource on server. Can occur with (too rapid) PUT requests.</td>
    </tr>
    <tr>
    <td><code>5xx</code></td>
    <td>Server error.</td>
    </tr>
    </tbody>
    </table>
    <h2>Error Messages</h2>
    <p>There are two types of errors returned by the API server in the bodies of 4xx and 5xx responses:</p>
    <ul>
    <li>
    <p>Field-specific errors</p>
    </li>
    <li>
    <p>General error messages</p>
    </li>
    </ul>
    <pre><code>{
      "errors": {
        "fieldName":[
          "Field-specific error message, e.g., fieldName is not a valid email address."
        ]
      },
      "messages": [
        "General error message."
      ]
    }
    </code></pre>
    <h2>Dates</h2>
    <p>Our API uses the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601</a> date format for
    complete date plus hours, minutes, seconds and timezone offset.</p>
    <pre><code>         yyyy-MM-dd'T'HH:mm:ssZ
    For UTC: 2015-11-03T13:21:58+00:00
    For PST: 2015-11-03T13:21:58-08:00
    </code></pre>
    <p>For more information about your specific programming language, please view <a href="https://developers.google.com/gmail/markup/reference/datetime-formatting">this document</a>.</p>
    <h2>Backwards Compatibility</h2>
    <p>Signifyd treats the following API changes as backwards compatible:</p>
    <ul>
    <li>
    <p>Adding new optional request parameter(s) to an existing API endpoint.</p>
    </li>
    <li>
    <p>Adding a new value to an enum field.</p>
    </li>
    <li>
    <p>Adding new fields to existing API responses.</p>
    </li>
    <li>
    <p>Changing the order of fields in an existing API response.</p>
    </li>
    <li>
    <p>Adding a brand new API resource.</p>
    </li>
    <li>
    <p>Adding a new webhook event. Your integration should handle unfamiliar webhook events gracefully.</p>
    </li>
    <li>
    <p>Changing the length of UUIDs (though we don't change lengths that often!).</p>
    </li>
    <li>
    <p>Changing the format of error messages, and other human readable strings.</p>
    </li>
    </ul>    </div>
        <!-- /Description -->
    
    </div></div>
      <div class="humanColumnContentsAuth"></div>
      <div class="humanColumnSection humanColumnContentsReference"><div class="humanColumnSection humanColumnSectionReference">
    
      <!-- Title -->
      <div class="humanColumnTitle">
        <h3 class="humanColumnTitleText">Reference</h3>
      </div>
      <!-- /Title -->
    
    <div class="resourceGroups">
    <div class="resourceGroup">
    
      <!-- Name -->
          <h1 class="resourceGroupName">
          Cases    </h1>
        <!-- /Name -->
    
      <!-- Description -->
          <div class="resourceGroupDescription markdown formalTheme">
          <p>A cases is an order submitted to Signifyd for review.</p>    </div>
        <!-- /Description -->
    
      <!-- Resources -->
      <div class="resources"><div class="resource">
    
      <!-- Name -->
      <h2 class="resourceName">
        Create Case  </h2>
      <!-- /Name -->
    
      <!-- Parameters -->
      <div class="row resourceParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Attributes -->
      <div class="row resourceAttributes hidden">
        <div class="row attributesTitle">
          <h3 class="row attributesTitleText">Attributes</h3>
        </div>
    
        <div class="row attributes"></div>
        <div class="row attributesKit hidden"></div>
      </div>
      <!-- /Attributes -->
    
      <!-- Description -->
          <div class="resourceDescription markdown formalTheme">
          <p>Submit an order for fraud review. We recommend sending as many data points as available for the best decision. If you are on a complete plan this will also automatically submit the order for guarantee.</p>    </div>
        <!-- /Description -->
    
      <!-- Actions -->
      <div class="resourceActions"><div class="action post selected">
    
      <!-- Invitation -->
      <div class="actionInvitation post selected">
              <a href="/reference/cases/create-case/create-case" class="actionInvitationRow">
                      <div class="actionTag post"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Create Case      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
        <!-- /Description -->
    
    </div></div>
      <!-- /Actions -->
    
    </div><div class="resource">
    
      <!-- Name -->
      <h2 class="resourceName">
        Get Case  </h2>
      <!-- /Name -->
    
      <!-- Parameters -->
      <div class="row resourceParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Attributes -->
      <div class="row resourceAttributes hidden">
        <div class="row attributesTitle">
          <h3 class="row attributesTitleText">Attributes</h3>
        </div>
    
        <div class="row attributes"></div>
        <div class="row attributesKit hidden"></div>
      </div>
      <!-- /Attributes -->
    
      <!-- Description -->
          <div class="resourceDescription markdown formalTheme">
          <p>Retrieve details about an individual case by investigation id or case id.</p>    </div>
        <!-- /Description -->
    
      <!-- Actions -->
      <div class="resourceActions"><div class="action get">
    
      <!-- Invitation -->
      <div class="actionInvitation get">
              <a href="/reference/cases/get-case/get-case" class="actionInvitationRow">
                      <div class="actionTag get"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Get Case      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
        <!-- /Description -->
    
    </div></div>
      <!-- /Actions -->
    
    </div></div>
      <!-- /Resources -->
    
    </div><div class="resourceGroup">
    
      <!-- Name -->
          <h1 class="resourceGroupName">
          Guarantees    </h1>
        <!-- /Name -->
    
      <!-- Description -->
          <div class="resourceGroupDescription markdown formalTheme">
          <p>A guarantee is a financial liability shift that protects online retailers in case of chargebacks. View our product manual to <a href="https://www.signifyd.com/resources/manual/signifyd-guarantee/signifyd-guarantee/">learn more</a>.</p>
    <p><em>Guarantee APIs require a case or investigation id which is only provided when <a href="https://jsapi.apiary.io/apis/signifydapi/reference/cases/create-a-case/create-case.html">creating a case</a>.</em></p>    </div>
        <!-- /Description -->
    
      <!-- Resources -->
      <div class="resources"><div class="resource">
    
      <!-- Name -->
      <h2 class="resourceName">
        Submit a Guarantee  </h2>
      <!-- /Name -->
    
      <!-- Parameters -->
      <div class="row resourceParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Attributes -->
      <div class="row resourceAttributes hidden">
        <div class="row attributesTitle">
          <h3 class="row attributesTitleText">Attributes</h3>
        </div>
    
        <div class="row attributes"></div>
        <div class="row attributesKit hidden"></div>
      </div>
      <!-- /Attributes -->
    
      <!-- Description -->
          <div class="resourceDescription markdown formalTheme">
          <p>Submit a request to guarantee an existing case.</p>    </div>
        <!-- /Description -->
    
      <!-- Actions -->
      <div class="resourceActions"><div class="action post">
    
      <!-- Invitation -->
      <div class="actionInvitation post">
              <a href="/reference/guarantees/submit-a-guarantee/submit-guarantee" class="actionInvitationRow">
                      <div class="actionTag post"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Submit Guarantee      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
        <!-- /Description -->
    
    </div></div>
      <!-- /Actions -->
    
    </div></div>
      <!-- /Resources -->
    
    </div><div class="resourceGroup">
    
      <!-- Name -->
          <h1 class="resourceGroupName">
          Events    </h1>
        <!-- /Name -->
    
      <!-- Description -->
          <div class="resourceGroupDescription markdown formalTheme">
          <p>Events are used to notify Signifyd about key events that occur during the lifecycle of an order. These events are used to collect indicators about</p>    </div>
        <!-- /Description -->
    
      <!-- Resources -->
      <div class="resources"><div class="resource">
    
      <!-- Name -->
      <h2 class="resourceName">
        Order Fulfilled  </h2>
      <!-- /Name -->
    
      <!-- Parameters -->
      <div class="row resourceParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Attributes -->
      <div class="row resourceAttributes hidden">
        <div class="row attributesTitle">
          <h3 class="row attributesTitleText">Attributes</h3>
        </div>
    
        <div class="row attributes"></div>
        <div class="row attributesKit hidden"></div>
      </div>
      <!-- /Attributes -->
    
      <!-- Description -->
          <div class="resourceDescription markdown formalTheme">
          <p>A fulfillment represents a shipment of one or more items in an order. Submit fulfillments details for orders that you have shipped, even if the order is partially shipped. Fulfillments are used to improve decision performance and as proof of delivery for submitted chargebacks.</p>    </div>
        <!-- /Description -->
    
      <!-- Actions -->
      <div class="resourceActions"><div class="action post">
    
      <!-- Invitation -->
      <div class="actionInvitation post">
              <a href="/reference/events/order-fulfilled/send-fulfillment" class="actionInvitationRow">
                      <div class="actionTag post"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Send Fulfillment      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
        <!-- /Description -->
    
    </div></div>
      <!-- /Actions -->
    
    </div><div class="resource">
    
      <!-- Name -->
      <h2 class="resourceName">
        Payment Completed  </h2>
      <!-- /Name -->
    
      <!-- Parameters -->
      <div class="row resourceParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Attributes -->
      <div class="row resourceAttributes hidden">
        <div class="row attributesTitle">
          <h3 class="row attributesTitleText">Attributes</h3>
        </div>
    
        <div class="row attributes"></div>
        <div class="row attributesKit hidden"></div>
      </div>
      <!-- /Attributes -->
    
      <!-- Description -->
          <div class="resourceDescription markdown formalTheme">
          <p>A transaction represents an attempt to exchange money for an order. This is used to collect the details of the payment and the status of the payment, success or failure. This API should be used only if you are creating a <a href="https://developer.signifyd.com/api/#/reference/cases/create-case">case</a> before collecting payment (pre-authorization).</p>    </div>
        <!-- /Description -->
    
      <!-- Actions -->
      <div class="resourceActions"><div class="action post">
    
      <!-- Invitation -->
      <div class="actionInvitation post">
              <a href="/reference/events/payment-completed/send-transaction" class="actionInvitationRow">
                      <div class="actionTag post"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Send Transaction      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
        <!-- /Description -->
    
    </div></div>
      <!-- /Actions -->
    
    </div></div>
      <!-- /Resources -->
    
    </div><div class="resourceGroup">
    
      <!-- Name -->
          <h1 class="resourceGroupName">
          Chargebacks    </h1>
        <!-- /Name -->
    
      <!-- Description -->
        <!-- /Description -->
    
      <!-- Resources -->
      <div class="resources"><div class="resource">
    
      <!-- Name -->
      <h2 class="resourceName">
        Create a chargeback  </h2>
      <!-- /Name -->
    
      <!-- Parameters -->
      <div class="row resourceParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Attributes -->
      <div class="row resourceAttributes hidden">
        <div class="row attributesTitle">
          <h3 class="row attributesTitleText">Attributes</h3>
        </div>
    
        <div class="row attributes"></div>
        <div class="row attributesKit hidden"></div>
      </div>
      <!-- /Attributes -->
    
      <!-- Description -->
        <!-- /Description -->
    
      <!-- Actions -->
      <div class="resourceActions"><div class="action post">
    
      <!-- Invitation -->
      <div class="actionInvitation post">
              <a href="/reference/chargebacks/create-a-chargeback/create-a-chargeback" class="actionInvitationRow">
                      <div class="actionTag post"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Create a chargeback      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
          <div class="actionDescription markdown formalTheme">
          <p>Create a chargeback for an investigation ID. <br></p>
    <p>Steps for using a REST API client such as Postman for POST on the chargeback creation endpoint are:</p>
    <ul>
    <li>
    <p>Set the Authoriation to <code>Basic Auth</code> in the drop-down and paste the authorization code to the <code>Username</code>.</p>
    </li>
    <li>
    <p>choose the body type <code>raw</code> and select <code>JSON (application/json)</code> in the right drop-down. This will automatically add <code>Content-Type: application/json</code> in the header.</p>
    </li>
    <li>
    <p>Set the request Json body in the required format.</p>
    </li>
    </ul>
    <p>To ensure the chargeback can be successfully matched with the investigation to which it relates at least one of the fields from <code>investigationId</code>, <code>merchantOrderId</code>, <code>transactionId</code>, <code>cardholderEmail</code>, <code>cardholderName</code> or <code>platformOrderId</code> must be provided in the request body.</p>
    <p>On completion of Signifyd's validation process which determines that sufficient chargeback information has been provided and that the chargeback relates to a guaranteed order on a live team id, it will return a 201 created status code along with a JSON body containing the newly-created claim object, and the chargeback and the tracking info if provided will be inside the claim.</p>
    <p>The <code>chargeback</code> is required to be populated with all required Chargeback information otherwise a 400 bad request with error messge will be returned.
    The <code>trackingInfo</code> is an option, if not present, no trackingInfo will be appended to the claim. The provision of fulfillment information is a requirement of Signifyd's Claim review process and if not provided through integration with our Fulfillment API must be included with this call.</p>
    <p>• 201 is returned when the chargeback is created.<br>
    • 400 is returned when request is invalid or chargeback to be created already exists or matched investigation cannot be found<br>
    • 503 is returned when server is unavailabe. Normally retry could solve this.<br>
    • 500 is returned when other unhandled exceptions are encountered.</p>    </div>
        <!-- /Description -->
    
    </div></div>
      <!-- /Actions -->
    
    </div></div>
      <!-- /Resources -->
    
    </div><div class="resourceGroup">
    
      <!-- Name -->
          <h1 class="resourceGroupName">
          Chargeback Case    </h1>
        <!-- /Name -->
    
      <!-- Description -->
        <!-- /Description -->
    
      <!-- Resources -->
      <div class="resources"><div class="resource">
    
      <!-- Name -->
      <h2 class="resourceName">
        Update Chargeback Case  </h2>
      <!-- /Name -->
    
      <!-- Parameters -->
      <div class="row resourceParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Attributes -->
      <div class="row resourceAttributes hidden">
        <div class="row attributesTitle">
          <h3 class="row attributesTitleText">Attributes</h3>
        </div>
    
        <div class="row attributes"></div>
        <div class="row attributesKit hidden"></div>
      </div>
      <!-- /Attributes -->
    
      <!-- Description -->
        <!-- /Description -->
    
      <!-- Actions -->
      <div class="resourceActions"><div class="action patch">
    
      <!-- Invitation -->
      <div class="actionInvitation patch">
              <a href="/reference/chargeback-case/update-chargeback-case/update-chargeback-case" class="actionInvitationRow">
                      <div class="actionTag patch"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Update Chargeback Case      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
          <div class="actionDescription markdown formalTheme">
          <p>This endpoint is used by merchants to submit chargeback case updates to Signifyd.
    Investigation id and chargeback ref id are required in the URL to help locate a chargeback case.</p>
    <p>• 200 is returned when the update is successful.<br>
    • 400 is returned when the request body is invalid.<br>
    • 403 is returned if the user is not authorized to access the chargeback case.<br>
    • 404 is returned if the chargeback case doesn't exist.<br>
    • 500 is returned if an error occurred with the request.<br></p>    </div>
        <!-- /Description -->
    
    </div></div>
      <!-- /Actions -->
    
    </div></div>
      <!-- /Resources -->
    
    </div><div class="resourceGroup">
    
      <!-- Name -->
          <h1 class="resourceGroupName">
          Merchant Reports    </h1>
        <!-- /Name -->
    
      <!-- Description -->
          <div class="resourceGroupDescription markdown formalTheme">
          <p>While the reporting dashboard export on the console provides access to order and claims details for smaller data volumes, some merchants require direct API
    access to load historical claims and orders into their internal databases and reporting systems. The Reporting APIs allow direct API calls
    to be made to Signifyd's database to get the order and claims details.</p>    </div>
        <!-- /Description -->
    
      <!-- Resources -->
      <div class="resources"><div class="resource">
    
      <!-- Name -->
      <h2 class="resourceName">
        Merchant Order Reports  </h2>
      <!-- /Name -->
    
      <!-- Parameters -->
      <div class="row resourceParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Attributes -->
      <div class="row resourceAttributes hidden">
        <div class="row attributesTitle">
          <h3 class="row attributesTitleText">Attributes</h3>
        </div>
    
        <div class="row attributes"></div>
        <div class="row attributesKit hidden"></div>
      </div>
      <!-- /Attributes -->
    
      <!-- Description -->
        <!-- /Description -->
    
      <!-- Actions -->
      <div class="resourceActions"><div class="action get">
    
      <!-- Invitation -->
      <div class="actionInvitation get">
              <a href="/reference/merchant-reports/merchant-order-reports/get-order-reports" class="actionInvitationRow">
                      <div class="actionTag get"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Get order reports      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
          <div class="actionDescription markdown formalTheme">
          <p>This endpoint will return json output unless the <code>Accept</code> header is explicitly specified to be <code>application/zip</code>.
    Returns a list of orders belonging to "teamIds" and between "startDate" and "endDate". The return value of this</p>
    <p>• 200 is returned on a success. (<code>Content-Type</code> will depend on the <code>Accept</code> header of the request.)<br>
    • 204 is returned when there are no further results to fetch. Check for this when making multiple calls for datasets &gt; 20,000 rows.<br>
    • 400 is returned if startDate &lt;= endDate, the csv file contain more than 1 million rows, or if the date range is greater than a month.<br>
    • 403 is returned if a user cannot access one of the team id's.<br>
    • 500 is returned if there was an error with the download.<br>
    • 500 is returned on a timeout.<br></p>    </div>
        <!-- /Description -->
    
    </div></div>
      <!-- /Actions -->
    
    </div><div class="resource">
    
      <!-- Name -->
      <h2 class="resourceName">
        Merchant Claim Reports  </h2>
      <!-- /Name -->
    
      <!-- Parameters -->
      <div class="row resourceParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Attributes -->
      <div class="row resourceAttributes hidden">
        <div class="row attributesTitle">
          <h3 class="row attributesTitleText">Attributes</h3>
        </div>
    
        <div class="row attributes"></div>
        <div class="row attributesKit hidden"></div>
      </div>
      <!-- /Attributes -->
    
      <!-- Description -->
        <!-- /Description -->
    
      <!-- Actions -->
      <div class="resourceActions"><div class="action get">
    
      <!-- Invitation -->
      <div class="actionInvitation get">
              <a href="/reference/merchant-reports/merchant-claim-reports/get-claim-reports" class="actionInvitationRow">
                      <div class="actionTag get"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Get claim reports      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
          <div class="actionDescription markdown formalTheme">
          <p>This endpoint will return json output unless the <code>Accept</code> header is explicitly specified to be <code>application/zip</code>.
    Returns a list of claims belonging to "teamIds" and between "startDate" and "endDate". The return value of this</p>
    <p>• 200 is returned on a success along with zip file containing a CSV file with your reports.<br>
    • 204 is returned when there are no further results to fetch or if there is no date for the specified parameters. <br>
    • 400 is returned if startDate &lt;= endDate, the csv file contain more than 1 million rows, or if the date range is greater than a month.<br>
    • 403 is returned if a user cannot access one of the team id's.<br>
    • 500 is returned if there was an error with the download.<br>
    • 503 is returned on a timeout.<br></p>    </div>
        <!-- /Description -->
    
    </div></div>
      <!-- /Actions -->
    
    </div></div>
      <!-- /Resources -->
    
    </div><div class="resourceGroup">
    
      <!-- Name -->
          <h1 class="resourceGroupName">
          Webhooks    </h1>
        <!-- /Name -->
    
      <!-- Description -->
          <div class="resourceGroupDescription markdown formalTheme">
          <p>Webhooks are messages sent by SIGNIFYD via HTTP POST to a url you configure on your <a href="https://app.signifyd.com/settings/notifications">Notifications</a> page in the SIGNIFYD settings.
    Webhook messages are sent when certain events occur in the life of an investigation. They allow your application to
    receive pushed updates about a case, rather than poll SIGNIFYD for status changes.</p>
    <h3>Webhook Events</h3>
    <p>You can create webhooks in Signifyd for the following events. Each event has a corresponding topic identifier
    which will be sent in the <code>X-SIGNIFYD-TOPIC</code> header of the webhook.</p>
    <p>Currently, the following events can trigger a webhook. Only one URL may be specified per event.</p>
    <table>
    <thead>
    <tr>
    <th>Event</th>
    <th><code>X-SIGNIFYD-TOPIC</code></th>
    <th>Description</th>
    <th>Response</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Case Creation</td>
    <td><code>cases/creation</code></td>
    <td>Sent immediately after a case is created</td>
    <td><a href="#case-webhook">View</a></td>
    </tr>
    <tr>
    <td>Case Review</td>
    <td><code>cases/review</code></td>
    <td>Sent anytime a user assigns a case a Review Disposition (thumbs up/down on console)</td>
    <td><a href="#case-webhook">View</a></td>
    </tr>
    <tr>
    <td>Decision Made</td>
    <td><code>decisions/*</code></td>
    <td>Sent anytime a decision is made on a case (guarantee or recommendation)</td>
    <td><a href="#decision-made">View</a></td>
    </tr>
    </tbody>
    </table>
    <h3>Responding to a Webhook</h3>
    <p>To acknowledge receipt of a webhook, your endpoint should be publicly accessible and return a 2xx HTTP status code. All response codes outside this range, including 3xx codes, will indicate to Signifyd that you did not receive the webhook. This mean that a URL redirection or a "Not Modified" response will be treated as a failure.</p>
    <p>If your endpoint does not successfully receive a webhook we will resend the webhook up to 15 times over four days. The first webhook will be retried after 20s with expotential delays for each subsequent retry. Webhooks cannot be manually retriggered, however you can retrieve the status of a guarantee or case by making a GET request on the applicable resource.</p>
    <h3>Verifying a Webhook</h3>
    <p>To allow a client to verify a webhook message has in fact come from SIGNIFYD, an <code>X-SIGNIFYD-SEC-HMAC-SHA256</code> header is included in each webhook POST message. The contents of this header is the Base64 encoded output of the HMAC SHA256 encoding of the JSON body of the message, using the team's API key as the encryption key. To verify the authenticity of the webhook message, you should calculate this value yourself and verify it equals the value contained in the header.</p>
    <p>Here's an example of how to compute the value in Java.</p>
    <p><code>Mac sha256HMAC = javax.crypto.Mac.getInstance("HmacSHA256"); SecretKeySpec secretKey = new SecretKeySpec(teamAPIKEY.getBytes(), "HmacSHA256"); sha256HMAC.init(secretKey); String encodedHMAC256 = Base64.encodeBase64String(sha256HMAC.doFinal(jsonBody.getBytes("UTF-8")));</code></p>
    <h3>Testing a Webhook</h3>
    <p>Once a webhook is configured, a test POST can be sent by selecting the Test button next to the desired webhook in the Signifyd console settings.
    The test webhook message is sent with an HMAC SHA256 verification header (see Webhook Verification below).
    The header value is the Base64 encoded output of the HMAC SHA256 encoding of the test webhook JSON body,
    using the team API key when available. The test webhook message uses the secret key <code>ABCDE</code>. A 'cases/test' topic header is also sent with the test POST.</p>
    <h3>Webhook Response</h3>
    <h4><a name="case-webhook"></a>Cases and Guarantees</h4>
    <pre><code>{
       "analysisUrl":"https://signifyd.com/v2/cases/1/analysis",
       "notesUrl":"https://signifyd.com/v2/cases/1/notes",
       "guaranteeEligible":false,
       "status":"DISMISSED",
       "uuid":"709b9107-eda0-4cdd-bdac-a82f51a8a3f3",
       "headline":"John Smith",
       "reviewDisposition":null,
       "associatedTeam":{
          "teamName":"anyTeam",
          "teamId":26,
          "getAutoDismiss":true,
          "getTeamDismissalDays":2
       },
       "orderId":"19418",
       "orderDate":"2013-06-17T06:20:47-0700",
       "orderAmount":365.99,
       "createdAt":"2013-11-05T14:23:26-0800",
       "updatedAt":"2013-11-05T14:23:26-0800",
       "investigationId":1,
       "score":262,
       "caseId":1,
       "guaranteeDisposition":"APPROVED"
    }
    </code></pre>
    <h4><a name="decision-made"></a>Decision Made</h4>
    <pre><code>{
      “caseId”: 1,
      “isTest”: true,
      “score“:262,
      “checkpointAction”: “ACCEPT”
    }
    </code></pre>    </div>
        <!-- /Description -->
    
      <!-- Resources -->
      <div class="resources"><div class="resource">
    
      <!-- Name -->
      <h2 class="resourceName">
        Create and Update Webhooks  </h2>
      <!-- /Name -->
    
      <!-- Parameters -->
      <div class="row resourceParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Attributes -->
      <div class="row resourceAttributes hidden">
        <div class="row attributesTitle">
          <h3 class="row attributesTitleText">Attributes</h3>
        </div>
    
        <div class="row attributes"></div>
        <div class="row attributesKit hidden"></div>
      </div>
      <!-- /Attributes -->
    
      <!-- Description -->
        <!-- /Description -->
    
      <!-- Actions -->
      <div class="resourceActions"><div class="action post">
    
      <!-- Invitation -->
      <div class="actionInvitation post">
              <a href="/reference/webhooks/create-and-update-webhooks/create-webhooks" class="actionInvitationRow">
                      <div class="actionTag post"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Create Webhooks      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
          <div class="actionDescription markdown formalTheme">
          <p>Create a new webhook or webhooks for a team.</p>    </div>
        <!-- /Description -->
    
    </div><div class="action put">
    
      <!-- Invitation -->
      <div class="actionInvitation put">
              <a href="/reference/webhooks/create-and-update-webhooks/update-webhooks" class="actionInvitationRow">
                      <div class="actionTag put"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Update Webhooks      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
          <div class="actionDescription markdown formalTheme">
          <p>Update existing webhooks for a team in bulk.</p>    </div>
        <!-- /Description -->
    
    </div><div class="action get">
    
      <!-- Invitation -->
      <div class="actionInvitation get">
              <a href="/reference/webhooks/create-and-update-webhooks/retrieve-webhooks" class="actionInvitationRow">
                      <div class="actionTag get"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Retrieve Webhooks      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
          <div class="actionDescription markdown formalTheme">
          <p>Retrieve all webhooks for a team.</p>    </div>
        <!-- /Description -->
    
    </div></div>
      <!-- /Actions -->
    
    </div><div class="resource">
    
      <!-- Name -->
      <h2 class="resourceName">
        Update and Delete a Webhook  </h2>
      <!-- /Name -->
    
      <!-- Parameters -->
      <div class="row resourceParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Attributes -->
      <div class="row resourceAttributes hidden">
        <div class="row attributesTitle">
          <h3 class="row attributesTitleText">Attributes</h3>
        </div>
    
        <div class="row attributes"></div>
        <div class="row attributesKit hidden"></div>
      </div>
      <!-- /Attributes -->
    
      <!-- Description -->
          <div class="resourceDescription markdown formalTheme">
          <p>Modify or delete an existing webhook for a team.</p>    </div>
        <!-- /Description -->
    
      <!-- Actions -->
      <div class="resourceActions"><div class="action put">
    
      <!-- Invitation -->
      <div class="actionInvitation put">
              <a href="/reference/webhooks/update-and-delete-a-webhook/update-webhook" class="actionInvitationRow">
                      <div class="actionTag put"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Update Webhook      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
        <!-- /Description -->
    
    </div><div class="action delete">
    
      <!-- Invitation -->
      <div class="actionInvitation delete">
              <a href="/reference/webhooks/update-and-delete-a-webhook/delete-webhook" class="actionInvitationRow">
                      <div class="actionTag delete"></div>
          
          <!-- Name -->
          <h4 class="actionName">
            Delete Webhook      </h4>
          <!-- /Name -->
    
          <!-- Icon -->
          <div class="actionInvitationIcon"></div>
          <!-- /Icon -->
    
              </a>
          </div>
      <!-- Invitation -->
    
      <!-- Relation -->
        <!-- /Relation -->
    
      <!-- Parameters -->
      <div class="row actionParameters hidden"></div>
      <!-- /Parameters -->
    
      <!-- Authentication -->
      
        <!-- /Authentication -->
    
      <!-- Description -->
        <!-- /Description -->
    
    </div></div>
      <!-- /Actions -->
    
    </div></div>
      <!-- /Resources -->
    
    </div><div class="resourceGroup">
    
      <!-- Name -->
          <h1 class="resourceGroupName">
          Device Fingerprint    </h1>
        <!-- /Name -->
    
      <!-- Description -->
          <div class="resourceGroupDescription markdown formalTheme">
          <p>Signifyd’s device fingerprinting solution uniquely tracks and identifies devices used to transact on your site, increasing your protection from fraud.</p>
    <h3>1. Install the Javascript snippet</h3>
    <p>Place the following script just before the closing <code>&lt;/head&gt;</code> tag on all public facing pages. The script loads asynchronously and does not affect page load time.</p>
    <p><em>We recommend that you load the script on all public user-facing pages. If you are unable to load the script on pages such as payment, login, etc, make sure to have loaded the script at least once before the checkout process is complete.</em></p>
    <pre><code>&lt;script
    defer
    type="text/javascript"
    id="sig-api"
    data-order-session-id="YOUR-SESSION-ID-HERE"
    src="https://cdn-scripts.signifyd.com/api/script-tag.js"&gt;&lt;/script&gt;
    </code></pre>
    <h3>2. Provide a unique session id</h3>
    <p>Replace data-order-session-id with a unique session id for the current user's checkout.</p>
    <p>The session id must formatted as followed:</p>
    <ul>
    <li>
    <p>Less than 128 characters long</p>
    </li>
    <li>
    <p>Upper and lowercase English letters (a-z, A-Z)</p>
    </li>
    <li>
    <p>Digits (0-9)</p>
    </li>
    <li>
    <p>Underscore (_)</p>
    </li>
    <li>
    <p>Hyphen (-)</p>
    </li>
    </ul>
    <h3>3. Send the session id on case creation</h3>
    <p>After an order is created on your website you will need to add the value you used for <code>data-order-session-id</code> to the body of the API POST request to, <code>https://api.signifiyd.com/v2/cases</code> under the <code>purchase</code> object:</p>
    <pre><code>// Create a Case
    // POST https://api.signifyd.com/v2/cases
    // Body
    {
        "purchase": {
            "orderSessionId": "YOUR-SESSION-ID-HERE",
            "browserIpAddress": "192.168.1.1",
            "orderId": "19418",
            "createdAt": "2016-07-11T17:54:31-05:00",
            "paymentGateway": "stripe",
            "paymentMethod": "credit_card",
            "transactionId": "1a2sf3f44f21s1",
            "currency": "USD",
           …
        }
    }
    </code></pre>
    <p>View the <a href="http://docs.signifydenterprise.apiary.io/#reference/cases/create-a-case/create-a-case">create a case</a> docs for additional information on creating cases.</p>
    <h3>Testing the Signifyd device fingerprinting script</h3>
    <p>During testing you may want to confirm that the Signifyd device fingerprinting script is working correctly. To do so you can call the <code>SIGNIFYD_GLOBAL.scriptTagHasLoaded()</code> method which will return a boolean <code>true|false</code> value.</p>
    <p>Note - <em>we have namespaced all of the device fingerprinting methods under the <code>SIGNIFYD_GLOBAL</code> object to avoid potential naming conflicts.</em></p>    </div>
        <!-- /Description -->
    
      <!-- Resources -->
      <div class="resources"></div>
      <!-- /Resources -->
    
    </div></div></div></div>
      <div class="humanColumnSection humanColumnContentsDataStructures"></div>
          <div class="humanColumnSeed"><!-- react-empty: 1 --></div>
      
    </div>`
    }
    this.goToNews = this.goToNews.bind(this)
    this.searchNews = this.searchNews.bind(this);
    this.onDownloadClick = this.onDownloadClick.bind(this);
    
  }
  searchNews(keyword){
    this.props.searchHeadlines(keyword)
  }
  goToNews(news){
    localStorage.setItem('newsdetail', JSON.stringify(news))
    this.setState({redirect:true})
  }
  componentDidMount(){
    localStorage.removeItem('newsdetail')
    this.props.getHeadLines();
  }
  onDownloadClick(e){
    console.log(e.target.id)
  }
  render() {
    const storePayment = 'storePayment';
    return (
      <>
        <div class="samsung-logo"></div>
        <div className="content">
          {/* <Row>
          <div className="col-md-3">
                    <a id={storePayment} onClick={this.onDownloadClick}>Download List</a>
                  </div>
            {this.state.redirect ? <Redirect to="/admin/newsDetail"/> : ""}
            <Search searchNews={this.searchNews}/>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Latest News</CardTitle>
                  <p className="card-category">
                    Please use the search bar to find news with keywords
                  </p>
                </CardHeader>
                <CardBody>
                <Table responsive>
              
                    {this.props.newsData ? 
                    <tbody>
                    {this.props.newsData.map(news =>
                      <Card onClick={()=>this.goToNews(news)}><CardHeader><CardTitle>{news.title}</CardTitle></CardHeader><CardBody>{news.description}</CardBody></Card>
                    )}
                    </tbody>
                    : ""}
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.staticContent
            }}></div>
        </div>
      </>
    );
  }
}

export default News;
