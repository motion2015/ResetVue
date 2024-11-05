<template>
  <Subpage :pagetit="'도서 소개'">
    <div class="bookpage">
      <VueSlickCarousel class="subpagslider" v-bind="settings">
        <div class="rollimg" v-for="(item, index) in Newbooks" :key="index">
          <span class="imgbox"><img :src="item.imgurl" alt="" /></span>
          <strong v-html="item.name"></strong>
        </div>
      </VueSlickCarousel>
      <section class="bookdetail">
        <h1 class="booktitle">
          Do it! 웹 사이트 따라 만들기
          <span>HTML, CSS, 자바스크립트, jquery, Ajax로 웹 퍼블리싱</span>
        </h1>
        <div class="book-info">
          <div class="imgview">
            <div class="imgbook">
              <img src="/images/books_image/book01.jpg" alt="" />
            </div>
            <div class="bookbtns">
              <b-button variant="lightgray">
                <i class="bi bi-search" alt="" />책 미리보기
              </b-button>
              <b-button variant="lightgray">
                <i class="bi bi-hdd" alt="" />전자책
              </b-button>
            </div>
          </div>
          <div class="infolist">
            <ul>
              <li v-for="(item, index) in bookinfolists" :key="index">
                <span class="label">{{ item.label }}</span>
                <span class="infocontent">{{ item.content }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </Subpage>
</template>

<script>
import Subpage from "@/layout/components/Subpage.vue";

export default {
  components: {
    Subpage,
  },
  data() {
    return {
      Newbooks: [
        {
          imgurl: "/images/books_image/book01.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          dec: "HTML, CSS, 자바스크립트, jquery, Ajax로 웹 퍼블리싱",
        },
        {
          imgurl: "/images/books_image/book02.jpg",
          name: "Do it! 첫 알고리즘",
          dec: "160가지 그림과 스토리텔링으로 이해한다!",
        },
        {
          imgurl: "/images/books_image/book03.jpg",
          name: "Do it! C# 프로그래밍 입문",
          dec: "딱 필요한 문법만 빠르게 배우고 프로젝트 실습까지!",
        },
        {
          imgurl: "/images/books_image/book04.jpg",
          name: "IT 5분 잡학사전",
          dec: "누구나 쉽게 이해할 수 있는 IT 지식이 가득한 입문서",
        },
        {
          imgurl: "/images/books_image/book05.jpg",
          name: "Do it! SQL 입문",
          dec: "비전공자도 개발자도 쉽게 배우는 기초 문법 + 실용 예제",
        },
        {
          imgurl: "/images/books_image/book06.jpg",
          name: "Do it! 클론 코딩 줌",
          dec: "노마드 코더와 만드는 화상 채팅 서비스",
        },
        {
          imgurl: "/images/books_image/book08.jpg",
          name: "된다! 엑셀 수식 & 함수",
          dec: "복잡한 수식의 원리부터 함수 설명까지!",
        },
        {
          imgurl: "/images/books_image/book09.jpg",
          name: "일 잘하는 디자이너",
          dec: "클라이언트 설득부터 타이포그래피, 색상 선택, 면접 준비까지!",
        },
        {
          imgurl: "/images/books_image/book10.jpg",
          name: "된다! 아이패드 하루 24시간",
          dec: "굿노트, 프로크리에이트, 루마퓨전 사용법과 애플 연동, 아이패드 문제 해결까지!",
        },
        {
          imgurl: "/images/books_image/book21.jpg",
          name: "블록체인 무엇인가?",
          dec: "수학, 코딩 몰라도 이해하는 비유의 힘!",
        },
      ],
      settings: {
        slidesToShow: 8,
        arrows: true,
        dots: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
      bookinfolists: [
        { label: "저자", content: "김윤미" },
        { label: "발행일", content: "2019-11-28" },
        { label: "사양", content: "312쪽 | 188*257mm" },
        { label: "ISBN", content: "979-11-6383-119-2 13000" },
        { label: "정가", content: "16,000원" },
        { label: "상태", content: "정상 판매중" },
      ],
    };
  },
};
</script>
