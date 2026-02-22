#!/bin/bash
# Download all Google Drive images to public/images
# Usage: ./scripts/download-images.sh

set -e
cd "$(dirname "$0")/.."
mkdir -p public/images

download() {
  local id=$1
  local file=$2
  local size=${3:-w1920}
  echo "Downloading $file..."
  curl -sfL -o "public/images/$file" "https://drive.google.com/thumbnail?id=$id&sz=$size" || {
    echo "Failed: $file"
    return 1
  }
}

# Logo (Navbar, Footer) - use w512 for crisp display
download "1Hd1d7RuFP44147IKZsOmnsAmIdXGddkG" "logo.png" "w512"

# Hero background
download "1qOysy_xHnZqIFQEcfHcw9AhttcsXTIJu" "hero-bg.jpg" "w1920"

# Interstitial images
download "1W16RR0GR1CZ8kZ3eY8dIvnt99Yv8v2U4" "workshop-env.jpg" "w1920"
download "1gBu60eQIeI5z4Yr2w7Texp0tEYdSAHhS" "hands-on.jpg" "w1920"
download "1sW6XXsKOOs9-6JHJg_r_bI5csS3LeD4J" "community.jpg" "w1920"

# Testimonial avatars (w200)
download "1MY9EcVORcOtXYo9kxMns1ANhA4wrwkg3" "testimonial-natalia.jpg" "w200"
download "1hV4n85i4B1VuiM2UtFZADIcSBQiZ5buV" "testimonial-tomas.jpg" "w200"
download "1IjPX-6Ej3oTyJ4Sriof2BcFZKCOcGGLG" "testimonial-iveta.jpg" "w200"
download "18uyafaVhbKmzPXVC-lI_b1HiOSg-gJmv" "testimonial-filip.jpg" "w200"
download "1ublQE3NQ0tYmhZQd9-e1-cPjR3p4hVpe" "testimonial-martina.jpg" "w200"
download "1D0sYaGAhor7XhNw_tiA539pN8mRpGknB" "testimonial-monika.jpg" "w200"
download "1HNagqCgOBCbqSg1_hcyCxM9vQdII2ImG" "testimonial-laura.jpg" "w200"
download "12Iku5G8PRE_UjwNMtEuHc2SZTt4nV17B" "testimonial-miroslav.jpg" "w200"
download "1RHV7scy0LU4SjIReTk5BeadD3vSYEiQU" "testimonial-lubomir.jpg" "w200"

# Tutor photos (w600)
download "1WxPS-dktLoxXJS3-ro4iPgo_FK5Z6X7G" "tutor-imrich.jpg" "w600"
download "1KWGIKSZZhOHkq4ytE-CW1xygIzhcGmjB" "tutor-laura.jpg" "w600"
download "1qs9RU_pkK2_xYPw6WNCQvqyAhmjtXJg2" "tutor-jan.jpg" "w600"
download "1LS_hIK2lSMzunIAkNOm77sqbIQrY098P" "tutor-oliver.jpg" "w600"
download "1ASDL5e4jI2OM3meQUI0_jP8XJV5l0Yz7" "tutor-martin.jpg" "w600"
download "1T6fH8Lk7O3AY0xucu0J80ZFkdaPJmLZO" "tutor-sona.jpg" "w600"

# Ticker logos (w400)
download "1BiL9fN7ziyCcXaFp3Npw5Z1TMbFFrSGs" "ticker-iza.png" "w400"
download "10iYwRfOJT1f_8AFYHjZZOCwIM4aFiN0h" "ticker-rrz.png" "w400"
download "10Kbb7eRJ3OyIOTgUa3TUBG_SLl9pPHih" "ticker-msd.png" "w400"
download "16o9qUfoloOAlXquOO7w4RInfgRF_qIxn" "ticker-cancom.png" "w400"
download "1At4vSJnQBndqJVa-5NQCwBG3LRiKQweD" "ticker-takeda.png" "w400"
download "1unbWgvQyGv_T_IxcAasA11iA9rBpIRq5" "ticker-vse.png" "w400"
download "1bcECkzi5ZGyzT675M0evKEo14cR8Cftu" "ticker-sav.png" "w400"
download "1gP7vNKSI2vireTLKK88xxDtI-_Xs_sl-" "ticker-lfuk.png" "w400"

echo "Done! Images saved to public/images/"
