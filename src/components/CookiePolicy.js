import React from 'react';
import {Link} from 'react-router-dom';
import Accordion from "./Accordion";

const CookiePolicy = () => {
    return (
        <div className="wrapper">
          <h1 className="page-title">
            Cookie Policy
          </h1>
          <div className="policy-wrapper">
            <h3>What are cookies</h3>
            <p>Cookies are small data files that are stored on your computer while browsing and perform various functions such as remembering
            service login data, collecting statistical information on visited pages, identifying your browser and device used, selecting content and Targeted
            communications depending on your preferences and more.</p><p> Cookies can be of various types, depending on the type of data they store and how long they
            remain stored on the user's device. Session or temporary cookies are either expired or deleted when the browser is being closed, while persistent
            ones have longer deadlines (from few minutes to months) depending on the functions they perform. <br/>These are the functions that distinguish cookies
            in two categories: technical and non-technical (or profiling). Technical cookies handle the information needed to deliver the pages and facilitate
            browsing, for example, allowing you to not re-enter username and password to access particular services, remember the last visited page, or how far
            you've seen it A video, recognize the type of device you are using and adjust the image size accordingly. Technical cookies also allow aggregate
            statistics analysis on the most visited pages and user preferences, but only in anonymous form, and are not used to analyze the behavior or
            preferences of individual users.</p><p> The consent to the receipt of cookies can also be expressed through specific user configurations of the browser.
            Most browsers allow you to set rules to handle cookies that are sent only by some or all sites, providing users with more privacy control and
            denying the ability to receive cookies themselves or otherwise modify their cookies. Choices made previously. The following are guidelines for
            managing cookies through the main browser settings:</p>
            <Accordion title="Mozilla Firefox">
              <Link to="https://support.mozilla.org/en-US/kb/block-websites-storing-site-preferences">link to instructions</Link>.
              <ol>
                <li>Right-click within the page and select <span>View Page Info</span>.</li>
                <li>In the Page Info window, select the <span>Permissions</span> panel.</li>
                <li>Underneath <strong>Set Cookies</strong>, remove the check mark from <strong>Use Default</strong>.</li>
                <li>Change the setting to <strong>Block</strong>.</li>
                <li>Close the Page Info window.</li>
                <li>Remove any cookies that the website has already set in Firefox. For instructions, see <Link to="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored">Delete cookies to remove the information websites have stored on your computer</Link>.</li>
              </ol>
            </Accordion>
            <Accordion title="Google Chrome">
              <Link to="https://support.google.com/chrome/answer/95647?hl=en">link to instructions</Link>.
              <ol>
                <li>On your computer, open Chrome.</li>
                <li>At the top right, click More <img title="More" src="https://storage.googleapis.com/support-kms-prod/ArAlBcUAe8h1l5m69uxnwElxkqwW0QdtIc3F" alt="More" width="18" height="18" /> <img title="and then" src="https://lh3.googleusercontent.com/nHFGZ_9xjCh-mP83zMzXQVJF5VYf2n6kwoBIxB2zv3V4VPT4gNTtBye8lYznogLqLPY=w13-h18" alt="and then" width="13" height="18" /> <strong>Settings</strong>.</li>
                <li>At the bottom, click <strong>Show advanced settings</strong>.</li>
                <li>In the "Privacy" section, click <strong>Content settings</strong>.</li>
                <li>Under "Cookies," click <strong>All cookies and site data</strong>.</li>
                <li>At the top right, enter the site's name.</li>
                <li>Point to the site.</li>
                <li>To the right, click Remove <img title="Remove" src="https://storage.googleapis.com/support-kms-prod/EkSYLH4zQcmB1Q3moTAkqWadsMNen9khgVjF" alt="Remove" width="18" height="18" />.</li>
              </ol>
            </Accordion>
            <Accordion title="Microsoft Internet Explorer">
              <Link to="http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies">link to instructions</Link>
              <ol>
                <li>In Internet Explorer, select the <strong>Tools</strong> <i className="fa fa-cog"></i> button, and then select <strong>Internet options</strong>.</li>
                <li>Select the <strong>Privacy</strong> tab, and under <strong>Settings</strong>, select <strong>Advanced</strong> and choose if you want to allow, block or be prompted for first and third party cookies.</li>
              </ol>
            </Accordion>
            <Accordion title="Safari">
              <Link to="https://support.apple.com/en-us/HT201265">link to instructions</Link>.
              <ol>
                <li>To clear your history and cookies, tap Settings &gt; Safari &gt; Clear History and Website Data. Clearing your history, cookies, and browsing data from Safari won't change your AutoFill information.</li>
                <li>To remove other stored information, tap Settings &gt; Safari &gt; Advanced &gt; Website Data &gt; Remove All Website Data.</li>
                <li>To visit sites without leaving a history, <Link to="https://support.apple.com/kb/HT203036">turn private browsing on or off</Link>.</li>
              </ol>
            </Accordion>

            <h3>First-party cookies</h3>
            <p>Below is a list and a brief description of the purposes of the cookies used directly by www.fabiopicciau.com (first-party cookies)
            during navigation on your site:</p>

            <p>Domain www.fabiopicciau.com</p>

            <h3>Third party cookies</h3>

            <p>While navigating through the www.fabiopicciau.com pages for statistical purposes, technical cookies may be issued and not exclusively managed by third parties.

            Below are listed third parties involved, links to their sites, and links to their cookie management policies, with an indication of their purpose.
            </p>
          </div>
        </div>
    );
}

export { CookiePolicy };
