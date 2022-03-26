import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Question No 01: How Does React Work?
          </Accordion.Header>
          <Accordion.Body>
            React ব্যবহারের একটি বড় সুবিধা হচ্ছে, JavaScript এর সাথে HTML অতি
            সহজেই ব্যবহার করা যায়। <br />
            ব্যবহারকারী React এর Element function দ্বারা
            সহজে DOM node তৈরি করে বার বার ব্যবহার করতে পারে। <br />
            HTML code দেখতে
            XML এর মতো, তবে React এ traditional DOM class এর পরিবর্তে className
            ব্যবহার করে। React এর মধ্যে JSX এর সাহায্যে অনায়াসে HTML code লেখা
            যায়। <br />
            প্রত্যেক JSX tags এর মধ্যে একটি name, children, ও attributes
            রয়েছে। Numeric values ও expressions অবশ্যই curly brackets এর মধ্যে
            লিখতে হয়। <br /> JSX attributes এ কোটেশন মার্কের ভিতরে strings লেখতে হয়, যা
            JavaScript এর মত। <br /> Components কে simplify ও কোড ক্লিন রাখার জন্যে
            অধিকাংশ ক্ষেত্রেই JavaScript এর স্থলে JSX ব্যবহার করে React এর কোড
            লিখা হয়। <br /> একটি React app এ সাধারণত একটি root DOM node থাকে। DOM এর
            একটি রেন্ডার করে page এর UI পরিবর্তন করে।
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Question No 2: What is the Difference between props and state?</Accordion.Header>
          <Accordion.Body>
          Props: <br />
          Props এর মাধ্যমে এক component থেকে অন্যটিতে ডাটা পাস করা হয়।  <br />
          Props হচ্ছে Immutable. এর ডাটা পরিবর্তন করা যায় না। <br />
          Props শুধু state এবং functional components এর সাথে ব্যবহৃত হয়। <br />
          Props হচ্ছে read-only. <br />

          State: <br />
          State এর মাধ্যমে শুধু একই component এ ডাটা পাস করা যায়।  <br />
          State হচ্ছে Mutable. এর ডাটা পরিবর্তন করা যায়। <br />
          State শুধু state components অথবা class component (Before 16.0) এর সাথে ব্যবহৃত হয়। <br />
          State হচ্ছে read ও write উভয়টি করতে সক্ষম। <br />
          </Accordion.Body>
        </Accordion.Item>        
      </Accordion>
    </div>
  );
};

export default Faq;
