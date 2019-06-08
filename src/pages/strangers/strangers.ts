import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, transition, animate, style, query, stagger, sequence, group } from '@angular/animations';

@Component({
  selector: 'page-strangers',
  templateUrl: 'strangers.html',
  animations: [
    trigger('duringSwipe', [
      state('addBorder', style({
        borderWidth: '1px',
        borderColor: 'white',
        borderStyle: 'solid',
      })),
      state('removeBorder', style({
        borderWidth: '0px',

      }))
    ]),
    trigger('swipeEvent', [

      state('swipeLeft', style({

      })),
      state('swipeRight', style({
      })),
      transition('* => swipeLeft', [
        sequence([
          animate('350ms', style({
            transform: 'translateX(-150%) rotate(-80deg)',


          })),

        ])
        ,
      ]),
      transition('* => swipeRight', [
        group([
          animate('350ms', style({
            transform: 'translateX(150%) rotate(80deg)',

          }))
        ])
        ,
      ])
    ])
  ]
})
export class StrangersPage {
  color = "#fff"
  middel_card_animation_background = " ../../assets/imgs/img3.jpg"
  middle_image_index = 3
  swipeLeftAnimation = ""
  addBorder = "removeBorder"
  showParantCardInfo = false
  name
  profession
  distance;
  isSwipe: boolean = true;
  card: any = [{
    id: 0,
    imageUrl: "img.jpeg",
    name: "Emma Watson",
    profession: "Actor",
    distance: "10"
  },
  {
    id: 1,
    imageUrl: "img2.jpg",
    name: "Kriti Sonan",
    profession: "Actor",
    distance: "5"
  },
  {
    id: 2,
    imageUrl: "img3.jpg",
    name: "Elliana Dcruz",
    profession: "Actor",
    distance: "3"
  },
  {
    id: 3,
    imageUrl: "img4.jpeg",
    name: "Unknown",
    profession: "Unknown",
    distance: "---"
  },
  {
    id: 4,
    imageUrl: "img5.jpeg",
    name: "Unknown",
    profession: "Actor",
    distance: "890"
  },
  {
    id: 5,
    imageUrl: "img6.jpeg",
    name: "Kajal Aggrawal",
    profession: "Actor",
    distance: "20"
  },
  {
    id: 6,
    imageUrl: "img7.jpeg",
    name: "Shruti Hasan",
    profession: "Actor",
    distance: "7"
  },
  {
    id: 7,
    imageUrl: "img8.jpeg",
    name: "Katrina Kaif",
    profession: "Actor",
    distance: "1"
  },


  ]

  card_first_img;
  card_middle_image;
  card_middle_parent_image;
  card_last_image;



  constructor(public navCtrl: NavController) {
    this.card_first_img = this.card[this.middle_image_index - 2]['imageUrl'];
    this.card_middle_image = this.card[this.middle_image_index]['imageUrl']
    this.card_last_image = this.card[this.middle_image_index + 2]['imageUrl']
    this.card_middle_parent_image = this.card[this.middle_image_index + 1]['imageUrl']
    this.name = this.card[this.middle_image_index]['name']
    this.profession = this.card[this.middle_image_index]['profession']
    this.distance = this.card[this.middle_image_index]['distance']

  }


  swipeCard(card_middle_image, event) {
    console.log("outside if" + this.isSwipe)
    if (this.isSwipe) {


      console.log("inside if" + this.isSwipe)
      var index
      this.card.find(function (item, i) {
        if (item.imageUrl == card_middle_image) {
          index = i
        }
      });
      this.middle_image_index = index;
      if (event.direction == 2 && this.middle_image_index < this.card.length - 1) {
        this.swipeLeftAnimation = "swipeLeft"
        this.addBorder = "addBorder"
        this.card_first_img = this.card[this.middle_image_index]['imageUrl'];
        this.card_middle_parent_image = this.card[this.middle_image_index + 1]['imageUrl']
        this.card_middle_image = this.card[this.middle_image_index]['imageUrl']
        if (this.middle_image_index == this.card.length - 2) {
          this.card_last_image = ""
        } else {

          this.card_last_image = this.card[this.middle_image_index + 2]['imageUrl']
        }
        this.name = this.card[this.middle_image_index + 1]['name']
        this.profession = this.card[this.middle_image_index + 1]['profession']
        this.distance = this.card[this.middle_image_index + 1]['distance']

      }

      if (this.middle_image_index > 0 && event.direction == 4) {
        this.swipeLeftAnimation = "swipeRight"
        this.addBorder = "addBorder"
        this.card_last_image = this.card[this.middle_image_index]['imageUrl'];
        this.card_middle_parent_image = this.card[this.middle_image_index - 1]['imageUrl']
        this.card_middle_image = this.card[this.middle_image_index]['imageUrl']


        if (this.middle_image_index == 1) {
          this.card_first_img = ""
        } else {
          this.card_first_img = this.card[this.middle_image_index - 2]['imageUrl'];
        }
        this.name = this.card[this.middle_image_index - 1]['name']
        this.profession = this.card[this.middle_image_index - 1]['profession']
        this.distance = this.card[this.middle_image_index - 1]['distance']

      }

    }
  }

  swipeAnimationEnd(event) {
    this.isSwipe = true
    this.card_middle_image = this.card_middle_parent_image
    this.swipeLeftAnimation = "*"
    this.addBorder = "removeBorder"
    this.showParantCardInfo = false;
    this.swipeLeftAnimation = "*"
    this.swipeLeftAnimation = "*"
  }

  swipeAnimationStart(event) {
    this.showParantCardInfo = true;
    this.isSwipe = false
  }

}
