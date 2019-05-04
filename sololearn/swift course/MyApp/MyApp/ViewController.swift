//
//  ViewController.swift
//  MyApp
//
//  Created by 🍉大河马爱小雨🐘 on 2019/5/4.
//  Copyright © 2019 🍉大河马爱小雨🐘. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var nameTextField: UITextField!
    
    @IBOutlet weak var nameLabel: UILabel!
    
    @IBAction func setLabelText(_ sender: UIButton) {
        nameLabel.text = nameTextField.text
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


}

