(ns com.app.model.mail
  (:require
    [clojure.string :as str]
    [clj-http.client :as http]))

(def email "marisolparraalzate2703@gmail.com")

(defn sendmail [email]
  (println "Send" email)
  (http/post
    "https://api.sendgrid.com/v3/mail/send"
    {:headers      {:authorization
                    (str "Bearer " "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")}
     :content-type :json
     :form-params  {:personalizations
                    [{:to [{:email email
                            :name  "example"}]
                            :dynamic_template_data {:todo "example"}
                            :subject "invoice app"}]
                    :from {:email "shakiraisabelgp1003@gmail.com"}
                    :content         [{:type  "text/plain"
                                        :value "invoice app"}]
                    :template_id      "d-0ea697b3f7fe4f59a1b6476717d962f2"}}))
